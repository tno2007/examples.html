import { JSONEditor } from 'vanilla-jsoneditor'

// Or use it through a CDN (not recommended for use in production):
// import { JSONEditor } from 'https://unpkg.com/vanilla-jsoneditor/index.js'
// import { JSONEditor } from 'https://cdn.jsdelivr.net/npm/vanilla-jsoneditor/index.js'

let content = {
	text: undefined,
	json: {
		greeting: 'Hello World'
	}
}

const editor = new JSONEditor({
	target: document.getElementById('jsoneditor'),
	props: {
		content,
		onChange: (updatedContent, previousContent, { contentErrors, patchResult }) => {
			// content is an object { json: JSONValue } | { text: string }
			// console.log('onChange', { updatedContent, previousContent, contentErrors, patchResult })
			content = updatedContent
			console.log(updatedContent)
		}
	}
})

// use methods get, set, update, and onChange to get data in or out of the editor.
// Use updateProps to update properties.