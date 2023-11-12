const doBeforeAndAfterDOMContentLoaded = (callback) => {
	document.addEventListener("readystatechange", () => {
		if (document.readyState === "interactive") {
			callback();
			document.addEventListener("DOMContentLoaded", () => {
        console.log("Dom loaded");
				callback();
			});
		}
      if (document.readyState === "complete") {
			  console.log("Document loaded");
		  }
	})
}

const randomFunction = () => {
	console.log("Event readystatechange");
};

doBeforeAndAfterDOMContentLoaded(randomFunction);
