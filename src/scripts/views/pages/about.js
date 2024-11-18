const About = {
  async render() {
    return `
         <div style="min-height:100vh">
          <h2 style="margin-top:120px">About</h2>
          <p class="container text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi tempore atque reprehenderit, ratione, illo neque est perspiciatis itaque temporibus ipsam dignissimos adipisci. Eius alias eligendi laborum facilis ipsam repellat, ipsa quasi voluptatum, esse iure ut recusandae obcaecati nemo quibusdam quod libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi tempore atque reprehenderit, ratione, illo neque est perspiciatis itaque temporibus ipsam dignissimos adipisci. Eius alias eligendi laborum facilis ipsam repellat, ipsa quasi voluptatum, esse iure ut recusandae obcaecati nemo quibusdam quod libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi tempore atque reprehenderit, ratione, illo neque est perspiciatis itaque temporibus ipsam dignissimos adipisci. Eius alias eligendi laborum facilis ipsam repellat, ipsa quasi voluptatum, esse iure ut recusandae obcaecati nemo quibusdam quod libero</p>
          <div class="sosmed">
            <a href="https://www.instagram.com/firmandyt/" target="_blank"><img src="./images/logos/ig.png"
                        width="45px" alt="Instagram Logo"></a>
            <a href="https://www.linkedin.com/in/firmandyt/" target="_blank"><img
                        src="./images/logos/linkedin.png" width="45px" alt="Linkedin Logo"></a>
            </div>
          </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render());
  },
};

export default About;
