var uidV, firstV, midV, addressV, emailV, lastV;

function readFom() {
  uidV = document.getElementById("uid").value;
  firstV = document.getElementById("first").value;
  midV = document.getElementById("mid").value;
  addressV = document.getElementById("address").value;
  lastV = document.getElementById("last").value;
  emailV = document.getElementById("email").value;
  Swal.fire("Data Read Succesfully!");
  console.log(uidV, firstV, addressV, midV, lastV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .set({
      uid: uidV,
      first: firstV,
      mid: midV,
      address: addressV,
      last: lastV,
      email: emailV
    });
    Swal.fire("Data Inserted Succesfully!");
  document.getElementById("uid").value = "";
  document.getElementById("first").value = "";
  document.getElementById("mid").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("last").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .on("value", function (snap) {
      document.getElementById("uid").value = snap.val().uid;
      document.getElementById("first").value = snap.val().first;
      document.getElementById("mid").value = snap.val().mid;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().email;
      document.getElementById("last").value = snap.val().last;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .update({
      //   uid: uidV,
      first: firstV,
      mid: midV,
      address: addressV,
      email: emailV, 
      last: lastV
    
    });
    Swal.fire("Data Updated Succesfully!");
  document.getElementById("uid").value = "";
  document.getElementById("first").value = "";
  document.getElementById("mid").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("last").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uidV)
    .remove();
    Swal.fire("Data Deleted Succesfully!");
  document.getElementById("uid").value = "";
  document.getElementById("first").value = "";
  document.getElementById("mid").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("last").value = "";
};
