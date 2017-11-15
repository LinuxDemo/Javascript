function hacked() {
	var payload = new ActiveXObject("WScript.Shell");
	payload.Run('cmd.exe /K msg "%username%" You got Hacked!');
}
hacked()