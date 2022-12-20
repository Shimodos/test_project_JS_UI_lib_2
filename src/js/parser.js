window.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body');
	 let textNode = [];

	function recursy (element) {
		element.childNodes.forEach(node => {
			
			if (node.nodeName.match(/^H\d/)) {
				const obj = {
					neader: node.nodeName,
					content: node.textContent
				};
				textNode.push(obj);
			} else {
				recursy(node);
			}
		});
	}

	recursy(body);
	

	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'Connect-Type': 'application/json'
		},
		body: JSON.stringify(textNode)
	})
	.then(response => response.json())
	.then(json => console.log(json));

});