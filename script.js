document.getElementById("submit").addEventListener("click", () => {
  if (document.getElementById("user").value) {
    document.getElementById("welcomeUser").innerHTML = `Hello, ${
      document.getElementById("user").value
    }!`;
  } else {
    document.getElementById("welcomeUser").innerHTML = `Hello, Guest!`;
  }
});

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle()
  document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})

document.getElementById('reset-to-system').addEventListener('click', async () => {
  await window.darkMode.system()
  document.getElementById('theme-source').innerHTML = 'System'
})
