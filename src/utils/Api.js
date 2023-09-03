import axios from "axios";

class Api {
  static getToDoList = async () => {
      const {data = []} =  await axios.get('https://jsonplaceholder.typicode.com/todos', {params: {limit: 50}})
      return data
  }
}

export default Api