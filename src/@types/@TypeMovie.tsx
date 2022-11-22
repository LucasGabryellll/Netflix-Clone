export interface Movie {
  slug?: string,
  title: string,
  items:
  {
    "results": [{
      "adult": boolean,
      "backdrop_path": string,
      "genre_ids": [],
      "id": number,
      "original_language": string,
      "title": string,
      "original_title": string,
      "overview": string,
      "poster_path": string,
      "media_type": string,
      "popularity": string,
      "release_date": string,
      "video": boolean,
      "vote_average": number,
      "vote_count": number
    }]
  },
}

export interface MovieInfo {
  "adult": boolean,
  "backdrop_path": string,
  "created_by": [
    {
      "id": number,
      "credit_id": string,
      "name": string,
      "gender": number,
      "profile_path": string
    }
  ],
  "episode_run_time": [],
  "first_air_date": string,
  "genres": [
    {
      "id": 10759,
      "name": string
    },
    {
      "id": number,
      "name": string
    },
    {
      "id": number,
      "name": string
    }
  ],
  "homepage": string,
  "id": number,
  "in_production": boolean,
  "languages": [],
  "last_air_date": string,
  "last_episode_to_air": {
    "air_date": string,
    "episode_number": number,
    "id": number,
    "name": string,
    "overview": string,
    "production_code": string,
    "runtime": number,
    "season_number": number,
    "show_id": number,
    "still_path": string,
    "vote_average": number,
    "vote_count": number
  },
  "name": string,
  "next_episode_to_air": number,
  "networks": [
    {
      "id": number,
      "name": string,
      "logo_path": string,
      "origin_country": string
    }
  ],
  "number_of_episodes": number,
  "number_of_seasons": number,
  "origin_country": [],
  "original_language": string,
  "original_name": string,
  "overview": string,
  "popularity": number,
  "poster_path": string,
  "production_companies": [
    {
      "id": number,
      "logo_path": string,
      "name": string,
      "origin_country": string
    }],
  "production_countries": [
    {
      "iso_3166_1": string,
      "name": string
    }
  ],
  "seasons": [
    {
      "air_date": string,
      "episode_count": number,
      "id": number,
      "name": string,
      "overview": string,
      "poster_path": string,
      "season_number": number
    }
  ],
  "spoken_languages": [
    {
      "english_name": string,
      "iso_639_1": string,
      "name": string
    }
  ],
  "status": string,
  "tagline": string,
  "type": string,
  "vote_average": number,
  "vote_count": number
}