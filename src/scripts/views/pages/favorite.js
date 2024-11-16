const Favorite = {
  async render() {
    return `
          <h2 style="margin-top:100px">Favorite Page</h2>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    console.log('Favorite page rendered');
  },
};

export default Favorite;
