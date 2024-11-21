<script>
    document.addEventListener("DOMContentLoaded", () => {
        // Select all links with a hash in the href (e.g., #home, #menu, #about)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function(e) {
                e.preventDefault(); // Prevent default jump-to-section behavior

                // Scroll smoothly to the section
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            });
        });
    });
   function openAllProducts(){
    window.location.href='all-products.html';
   }

</script>
