tailwind.config = {
    theme: {
      extend: {
        colors: {
          black: '#000000',
          red: '#F40404',
          overlay:'rgba(0, 0, 0, 0.6)',
          ash:' rgba(240, 240, 240, 1)',
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
          },
          backgroundImage: {
            banner: "url('/images/banner.png')", 
          },
          maxWidth: {
            container: '1140px',
          }
      }
    }
  }