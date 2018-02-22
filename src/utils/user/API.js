import axios from "axios";

export default {
  // Gets the user
  getUser: function() {
    return axios.get("/api/user");
  },
  
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },

  // Deletes the user with the given id
  // deleteUser: function(id) {
  //   return axios.delete("/api/user/" + id);
  // },

  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },

  // Update Uswer to the database
  updateUser: function(userData) {
    return axios.put("/api/user", userData)
  }

};
