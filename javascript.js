document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.color-btn').forEach(button => {
        button.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            document.getElementById('umbrellaImage').src = "\StarApps${color}-umbrella.png";
        });
    });

    document.getElementById('logoUpload').addEventListener('change', function() {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('logoPreview').src = e.target.result;
            document.getElementById('logoPreview').style.display = 'block';
        };
        reader.readAsDataURL(this.files[0]);
    });
});