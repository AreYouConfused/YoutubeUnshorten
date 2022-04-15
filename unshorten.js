let curStatus = browser.storage.local.get("shortsEnabled")

curStatus.then((object) => {
	if (object["shortsEnabled"] === false) {
		window.location.href = "https://www.youtube.com/watch?v=" + window.location.pathname.split("/")[2]
	}
})

