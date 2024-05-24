async function test() {
  try {
    await Promise.all([Promise.resolve("success"), Promise.reject("error01")])
      .then(() => {
        console.log(">>>>");
      })
      .finally((e) => {
        console.log("This will be logged. e:", e);
      });
    console.log("This will not be logged.");
  } catch (err) {
    console.log(err, "err"); // 输出：error
  }
}
test();
