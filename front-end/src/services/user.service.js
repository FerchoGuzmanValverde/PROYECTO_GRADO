import http from "./http-common";

export const CreateUser = (data) => {
    return http.post("/create-user", data);
}
export const GetUsers = (data) => {
    return http.get("/users", data);
}

export const UpdateUser = (data) => {
    return http.post("/update-user", data);
}

export const DeleteUser = (id) => {
    return http.post("/delete-user", id);
}

export const GetUserWithID = (id) => {
    return http.post("/get-user", id);
}

export const VerifyLogin = (data) => {
    const response = http.post("/auth-user", data);
    console.log("CONTROLADOR:", response)
    
}

export default CreateUser