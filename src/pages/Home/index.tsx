import React, { useEffect, useState } from "react";

import './index.css';

import Tmdb from "../../utils/Tmdb";
import { getMovieInfo } from "../../utils/getMovie";

import { Movie, MovieInfo } from "../../@types/@TypeMovie";

import Header from "../../components/Header";
import FeaturedMovie from "../../components/FeaturedMovie";
import MovieRow from "../../components/MovieRow";

export default function Home() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [featuredData, setFeaturedData] = useState<MovieInfo[]>([]);

  const [blackHeader, setBlackHeader] = useState(false);

  async function loadMovie() {
    let data = await Tmdb.getHomeList();

    setMovieList(data);

    // Pegar o filme em destaque
    let originals = data.filter(i => i.slug === 'originals');
    let randowChose = Math.floor(Math.random() * (originals?.[0]?.items?.["results"].length - 1));
    let chosen = originals?.[0].items?.["results"][randowChose];
    let chosenInfo = await getMovieInfo(chosen?.id, 'tv');

    setFeaturedData(chosenInfo);
  }

  useEffect(() => {
    loadMovie();

  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);

      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item?.title} items={item?.items} />
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="coração">❤</span> Por Lucas Gabryel
        Direitos de imagem para Netflix.
        Dados pegos no Themoviedb.org
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://media.tenor.com/DQyztbEmqnYAAAAC/netflix-loading.gif" alt="carregando" />
        </div>
      }
    </div>
  );
}
