import axios from 'axios';

const users = async () => {

    const { data } = await axios.get('http://localhost:4000/user');
    console.log('in AXIOS ', data)
    return data;

}

const adduser = async details => {
    console.log("DETAILS in adduser is ",details)
    let {data} = await axios.post('http://localhost:4000/user/create', details);
    return(data);
}
const deleteuser = async id => {
    console.log("User ID in deleteuser is ",id.identifier)
    let {data} = await axios.delete('http://localhost:4000/user/delete/'+id.identifier);
    return data;
}
const edituser = async info => {
    console.log("User ID in updateuser is ",info.identifier)
    console.log("Data in edituser is ",info);
    let {data} = await axios.put('http://localhost:4000/user/update/'+info.identifier,{username:info.username,
    password:info.password});
    return data;
}
const signinuser = async details => {
    console.log("Entered signinuser func in USerAPI");
    //console.log(`Details are: Username - ${details.username}, password - ${details["password"].slice(0,7)}`);
    let json = await axios.get('http://localhost:4000/user/'+details.username);
    let data = JSON.stringify(json["data"]);
    let temp = JSON.parse(data);
    let uname = temp["username"];
    let temp2 = JSON.stringify(temp["password"]);
    let temp3 = "";
    let pass = temp3.concat(temp2.slice(1,8));
    //console.log(`Data.username = ${uname}, Data.password = ${pass}`)
    if(uname===details.username && pass===details["password"].slice(0,7)) {
        return({"message":"Login successful","UID":temp["_id"]});
    }
    else if(uname!==details.username || pass!==details["password"].slice(0,7)) {
        return("Incorrect username or password");
    }
    else{
        return("User does not exist");
    }
}
export default {users,adduser,deleteuser,edituser,signinuser};
