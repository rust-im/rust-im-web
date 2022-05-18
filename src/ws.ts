const sendID1 = "test1";
const token1 =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTc3ODc2NDMsInVzZXJfaWQiOiJ0ZXN0MSJ9.hhKizCmojq832wCTVjoPW6usDlfZjs8cTaGTLR_JUNQ";

let sendID2 = "test2";
let token2 =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTgwNDM0NjgsInVzZXJfaWQiOiJ0ZXN0MiJ9.u1mdrT1vzoFmvxUp-UglTu1CuCkNxNGlJG2dET3iSeM";

const ws1 = new WebSocket(
  `ws://127.0.0.1:54321/rust-im?sendID=${sendID1}&token=${token1}&platform=1`
);
const ws2 = new WebSocket(
  `ws://127.0.0.1:54321/rust-im?sendID=${sendID2}&token=${token2}&platform=1`
);

ws1.onopen = (e) => {
  console.log("[ws1] onopen", e);
};

ws1.onclose = (e) => {
  console.log("[ws1] onclose", e);
};

ws1.onerror = (e) => {
  console.log("[ws1] onerror", e);
};

ws1.onmessage = (e) => {
  console.log("[ws1] onmessage", e);
};

ws2.onopen = (e) => {
  console.log("[ws2] onopen", e);
};

ws2.onclose = (e) => {
  console.log("[ws2] onclose", e);
};

ws2.onerror = (e) => {
  console.log("[ws2] onerror", e);
};

ws2.onmessage = (e) => {
  console.log("[ws2] onmessage", e);
};

const rustim = {
  ws1,
  ws2,
};

// @ts-ignore
window.rustim = rustim;

export default rustim;
