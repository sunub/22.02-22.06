
const stories = document.querySelector(".stories");
const median = stories.offsetLeft + (stories.clientWidth / 2);

const state = {
  current_story: stories.firstElementChild.lastElementChild
}

const navigateStories = direction => {
  const story = state.current_story
  const lastItemInUserStory = story.parentNode.firstElementChild
  const firstItemInUserStory = story.parentNode.lastElementChild
  const hasNextUserStory = story.parentElement.nextElementSibling
  const hasPrevUserStory = story.parentElement.previousElementSibling
  
  if (direction === 'next') {
    if (lastItemInUserStory === story && !hasNextUserStory)
      return
    else if (lastItemInUserStory === story && hasNextUserStory) {
      state.current_story = story.parentElement.nextElementSibling.lastElementChild
      story.parentElement.nextElementSibling.scrollIntoView({
        behavior: 'smooth'
      })
    }
    else {
      story.classList.add('seen')
      state.current_story = story.previousElementSibling
    }
  }
  else if(direction === 'prev') {
    if (firstItemInUserStory === story && !hasPrevUserStory)
      return
    else if (firstItemInUserStory === story && hasPrevUserStory) {
      state.current_story = story.parentElement.previousElementSibling.firstElementChild
      story.parentElement.previousElementSibling.scrollIntoView({
        behavior: 'smooth'
      })
    }
    else {
      story.nextElementSibling.classList.remove('seen')
      state.current_story = story.nextElementSibling
    }
  }
}


// left & right are free with snap points 👍
document.addEventListener('keydown', ({key}) => {
  if (key !== 'ArrowDown' || key !== 'ArrowUp')
    navigateStories(
      key === 'ArrowDown'
        ? 'next'
        : 'prev')
})

const btn = document.querySelector(".button--calypso");
const btn1 = document.querySelector(".button--calypso1");
const btn2 = document.querySelector(".button--calypso2");
const btn3 = document.querySelector(".button--calypso3");