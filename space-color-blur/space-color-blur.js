var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input, index, arr) {
    input.addEventListener('mousemove', function(event) {
        var relatedInput = event.target;
        var suffix = this.dataset.suffix || '';
        document.body.style.setProperty(`--${this.name}`,`${this.value}${suffix}`);
    })
})

inputs.forEach(function (input, index, arr) {
    input.addEventListener('change', function(event) {
        var relatedInput = event.target;
        var suffix = this.dataset.suffix || '';
        document.body.style.setProperty(`--${this.name}`,`${this.value}${suffix}`);
    })
})
