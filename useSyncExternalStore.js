function checkIfSnapshotChanged(inst) {
    const latestGetSnapshot = inst.getSnapshot;
    const prevValue = inst.value;
    try {
        const nextValue = latestGetSnapshot();
        return !Object.is(prevValue, nextValue);
    } catch (error) {
        return true;
    }
}

// useSyncExternalStore shim 核心代码
export function useSyncExternalStore(subscribe, getSnapshot) {
    const value = getSnapshot();

    const [{ inst }, forceUpdate] = useState({ inst: { value, getSnapshot } });

    // Track the latest getSnapshot function with a ref. This needs to be updated
    // in the layout phase so we can access it during the tearing check that
    // happens on subscribe.
    useLayoutEffect(() => {
        inst.value = value;
        inst.getSnapshot = getSnapshot;
        if (checkIfSnapshotChanged(inst)) {
            // Force a re-render.
            forceUpdate({ inst });
        }
    }, [subscribe, value, getSnapshot]);

    useEffect(() => {
            // The store changed. Check if the snapshot changed since the last time we
            // read from the store.
            if (checkIfSnapshotChanged(inst)) {
                // Force a re-render.
                forceUpdate({ inst });
            }
            const handleStoreChange = () => {
                if (checkIfSnapshotChanged(inst)) {
                    // Force a re-render.
                    forceUpdate({ inst });
                }
            };
            // Subscribe to the store and return a clean-up function.
            return subscribe(handleStoreChange);
        }, 
        [subscribe]
    );

    return value;
}

