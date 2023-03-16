// Implement typing effect on the "hello-line" section
const hello_text  = "Hello";
const hello_comma = ","
const hello_name  = "I'm Biagio"
const hello_speed = 55;

let text_counter = 0;
function typeHello() {
  if (text_counter < hello_text.length) {
    document.getElementById("hello-text").innerHTML += hello_text.charAt(text_counter);
    text_counter++;
    setTimeout(typeHello, hello_speed);
  }
}

let comma_counter = 0;
function typeComma() {
  if (comma_counter < hello_comma.length) {
    document.getElementById("hello-comma").innerHTML += hello_comma.charAt(comma_counter);
    comma_counter++;
  }
}

let name_counter = 0;
function typeName() {
  if (name_counter < hello_name.length) {
    document.getElementById("hello-name").innerHTML += hello_name.charAt(name_counter);
    name_counter++;
    setTimeout(typeName, hello_speed);
  }
}

typeHello()
setTimeout(typeComma, ((hello_speed * hello_text.length) + 50)); 
setTimeout(typeName,  (hello_speed * (hello_text.length + hello_comma.length) + 50))

// Implement typing effect on the "role-line" section
const role_text  = "a Full Stack Developer";
const role_dot   = "."
const role_speed = 55;

let role_text_counter = 0;
function typeRoleDescription() {
  if (role_text_counter < role_text.length) {
    document.getElementById("role-description").innerHTML += role_text.charAt(role_text_counter);
    role_text_counter++;
    setTimeout(typeRoleDescription, role_speed);
  }
}

let role_dot_counter = 0;
function typeBlinkingDot() {
  if (role_dot_counter < role_dot.length) {
    document.getElementById("blinking-dot").innerHTML += role_dot.charAt(role_dot_counter);
    role_dot_counter++;
  }
}

const role_line_timeout = (hello_speed * (hello_text.length + hello_comma.length + hello_name.length) + 50)
setTimeout(typeRoleDescription, role_line_timeout)
const role_dot_timeout = role_line_timeout + (role_speed * role_text.length)
setTimeout(typeBlinkingDot, role_dot_timeout)