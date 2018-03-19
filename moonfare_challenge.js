
// You've built an inflight entertainment system with on-demand movie streaming.

// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flight_length (in minutes) and a list of integers movie_lengths (in minutes) and returns a boolean indicating whether there are two numbers in movie_lengths whose sum equals flight_length.

// When building your function:
//   Assume your users will watch exactly two movies
//   Don't make your users watch the same movie twice
//   Optimize for runtime over memory

const flight_length = 210

const movie_lengths = [120, 90, 30]

const getMoviesForFlight = (movie_lengths, flight_length) => {
  let result = []
  for (let i = 0; i < movie_lengths.length; i += 1) {
    for (let j = i + 1; j < movie_lengths.length; j += 1) {
      if (movie_lengths[j] === flight_length - movie_lengths[i]) {
        result.push(movie_lengths[i], movie_lengths[j])
      }
    }
  }
  return result
}

console.log(getMoviesForFlight_2(movie_lengths, flight_length))
