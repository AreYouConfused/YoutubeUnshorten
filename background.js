let shortsEnabled = false

function toggleShorts() {
	shortsEnabled = !shortsEnabled
	browser.browserAction.setIcon({
		path: shortsEnabled ? {
			19: "icons/noshort-19-inactive.png",
			38: "icons/noshort-38-inactive.png"
		} : {
			19: "icons/noshort-19.png",
			38: "icons/noshort-38.png"

		}
	})
	console.log(shortsEnabled)
}

function redirectShort(requestDetails) {
	console.log("requestDetails.url: " + requestDetails.url)
	if (!shortsEnabled) {
		let newURL = "https://www.youtube.com/watch?v=" + requestDetails.url.split("/shorts/")[1]
		console.log(newURL)
		return {redirectUrl: newURL}
	}
	return

}

browser.browserAction.onClicked.addListener(toggleShorts);
browser.webRequest.onBeforeRequest.addListener(redirectShort, {urls: ["*://*.youtube.com/shorts/*"]}, ["blocking"])
console.log("running")
