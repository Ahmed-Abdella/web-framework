import axios from "axios";
axios.post(" http://localhost:3000/users", {
  name: "Ahmed",
  age: 27,
});

axios.get("http://localhost:3000/users/1");
