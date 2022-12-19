import HCarousel from '@ps/ui/components/HorizontalCarousel';
import { css } from '@emotion/react';

const style = css`
  margin: 2rem 0 3rem;
  img {
    height: 15rem;
  }
  .__prev,
  .__next {
    transform: scale(0.5, 0.67) !important;
    color: white !important;
    opacity: 0.75;
  }
  .__prev:hover,
  .__next:hover {
    opacity: 1;
  }
`;

function Home(props) {
  return (
    <HCarousel ss={style} {...props}>
      <span data-href="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_900/ps/photos/profile/wndr-color-wall.jpg">
        <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_510/ps/photos/profile/wndr-color-wall.webp" />
      </span>
      <span data-href="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_900/ps/photos/aboutus/aboutus.jpg">
        <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_510/ps/photos/aboutus/aboutus.webp" />
      </span>
      <span data-href="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_900/ps/photos/me/via-ferrata.jpg">
        <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_510/ps/photos/me/via-ferrata.webp" />
      </span>
      <span data-href="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_900/ps/photos/me/hg-crestline.jpg">
        <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_510/ps/photos/me/hg-crestline.webp" />
      </span>
      <span data-href="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_900/ps/photos/me/ycheck.jpg">
        <img
          loading="lazy"
          src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_510/ps/photos/me/ycheck.webp"
        />
      </span>
      <span data-href="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_900/ps/photos/me/dog-colorado.jpg">
        <img
          loading="lazy"
          src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_510/ps/photos/me/dog-colorado.webp"
        />
      </span>
      <span data-href="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_900/ps/photos/aboutus/desk-paul.jpg">
        <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_510/ps/photos/aboutus/desk-paul.webp" />
      </span>
      <span data-href="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_900/ps/photos/me/city-paul.jpg">
        <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_510/ps/photos/me/city-paul.webp" />
      </span>
      <span data-href="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_900/ps/photos/aboutus/aboutus-utah-road.jpg">
        <img src="https://res.cloudinary.com/paulshorey/image/upload/g_auto,c_fill,h_510/ps/photos/aboutus/aboutus-utah-road.webp" />
      </span>
    </HCarousel>
  );
}
export default Home;
