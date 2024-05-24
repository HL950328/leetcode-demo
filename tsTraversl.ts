type Trim<S extends string> = S extends `${' ' | '\t' | '\n'}${infer R}`
  ? Trim<R>
  : S extends `${infer L}${' ' | '\t' | '\n'}`
  ? Trim<L>
  : S;
type TrimExample = Trim<'   hello world   '>; // expected to be 'hello world'



type Reverse<T extends unknown[], U extends unknown[] = []> = [] extends T
  ? U
  : T extends [infer L, ...infer R]
  ? Reverse<R, [L, ...U]>
  : U;
type ReverseExample = Reverse<[1, 2, 3]>; // expected to be [3, 2, 1]

type InferString<T extends string> = T extends `${infer P}${infer _}` ? P : any;
type I8 = InferString<'Johnny'>;
