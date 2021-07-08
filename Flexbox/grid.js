const colors = {
    main: "#031475",
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}


document.querySelectorAll('.tag').forEach(elemento => {
    const a = elemento.a.toLowerCase()

    elemento.style.borderColor = colors.get(a)

    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(a)
        label.innerHTML = a
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})

