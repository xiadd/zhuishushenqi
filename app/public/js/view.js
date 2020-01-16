async function fetchMdFile () {
  const response = await fetch('/public/docs/README.md')
  if (response.ok) {
    const text = await response.text()
    return text
  }
}

async function renderMdFile () {
  const docContainer = document.getElementById('content')
  const doc = await fetchMdFile()
  docContainer.innerHTML = marked(doc)
  hljs.initHighlightingOnLoad()
}

renderMdFile()