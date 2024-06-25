import {Top100Movie} from '@/types/movies';

import {filterMovies} from '.';

describe('filterMovies', () => {
  const movies = [
    {title: 'Inception', year: 2010, rating: '8.8'},
    {title: 'The Dark Knight', year: 2008, rating: '9.0'},
    {title: 'Interstellar', year: 2014, rating: '8.6'},
    {title: 'The Prestige', year: 2006, rating: '8.5'},
  ] as Top100Movie[];

  it('should filter movies by title', () => {
    const filter = {title: 'Inception'};
    const filteredMovies = filterMovies(movies, filter);
    expect(filteredMovies).toEqual([
      {title: 'Inception', year: 2010, rating: '8.8'},
    ]);
  });

  it('should filter movies by year range', () => {
    const filter = {year: {min: 2008, max: 2014}};
    const filteredMovies = filterMovies(movies, filter);
    expect(filteredMovies).toEqual([
      {title: 'Inception', year: 2010, rating: '8.8'},
      {title: 'The Dark Knight', year: 2008, rating: '9.0'},
      {title: 'Interstellar', year: 2014, rating: '8.6'},
    ]);
  });

  it('should filter movies by rating range', () => {
    const filter = {rating: {min: 8.6, max: 9.0}};
    const filteredMovies = filterMovies(movies, filter);
    expect(filteredMovies).toEqual([
      {title: 'Inception', year: 2010, rating: '8.8'},
      {title: 'The Dark Knight', year: 2008, rating: '9.0'},
      {title: 'Interstellar', year: 2014, rating: '8.6'},
    ]);
  });

  it('should filter movies by title and year range', () => {
    const filter = {title: 'The', year: {min: 2000, max: 2010}};
    const filteredMovies = filterMovies(movies, filter);
    expect(filteredMovies).toEqual([
      {title: 'The Dark Knight', year: 2008, rating: '9.0'},
      {title: 'The Prestige', year: 2006, rating: '8.5'},
    ]);
  });

  it('should filter movies by title, year range, and rating range', () => {
    const filter = {
      title: 'The',
      year: {min: 2000, max: 2010},
      rating: {min: 8.5, max: 9.0},
    };
    const filteredMovies = filterMovies(movies, filter);
    expect(filteredMovies).toEqual([
      {title: 'The Dark Knight', year: 2008, rating: '9.0'},
      {title: 'The Prestige', year: 2006, rating: '8.5'},
    ]);
  });

  it('should return all movies when no filters are applied', () => {
    const filter = {};
    const filteredMovies = filterMovies(movies, filter);
    expect(filteredMovies).toEqual(movies);
  });

  it('should return an empty array when no movies match the filter', () => {
    const filter = {
      title: 'Nonexistent',
      year: {min: 2020, max: 2021},
      rating: {min: 9.5, max: 10},
    };
    const filteredMovies = filterMovies(movies, filter);
    expect(filteredMovies).toEqual([]);
  });
});
