import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 10,
  duration: "5s"
};

export default function() {
  const res = http.get("https://test-api.k6.io/public/crocodiles/");
  check(res, {
    "status is 200": (r) => r.status === 200
  });
}