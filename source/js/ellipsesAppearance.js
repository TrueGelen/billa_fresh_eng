window.addEventListener('load', () => {
  function showHeaderEllipse() {
    document.querySelector('.firstBlock .firstBlock__ellipse').classList.add('firstBlock__ellipse_show')
    document.querySelector('.firstBlock .firstBlock__content').classList.add('firstBlock__content_show')
  }

  function showTasksEllipses() {
    const ellipses = [
      ...document.querySelectorAll('.tasks .tasks__layouts picture'),
      document.querySelector('.decision .decision__ellipse'),
      document.querySelector('.why .why__ellipse'),
      ...document.querySelectorAll('.results .results__layouts picture'),
      document.querySelector('.team .team__ellipse')
    ]

    const content = [
      document.querySelector('.tasks .tasks__tasks'),
      document.querySelector('.tasks .tasks__TA'),
      document.querySelector('.decision .decision__content'),
      document.querySelector('.why .why__content'),
      document.querySelector('.results .results__result'),
      document.querySelector('.results .results__comments'),
      [...document.querySelectorAll('.team .team__content .team__members .member')]
    ]

    ellipses.forEach((ellipse, ind) => {
      if ((window.pageYOffset >= ((ellipse.getBoundingClientRect().y + window.pageYOffset) - window.innerHeight / 100 * 49))
        || (ellipse.getBoundingClientRect().y + ellipse.getBoundingClientRect().height) < window.innerHeight) {
        if (!ellipse.classList.contains('showed')) {

          //tasks
          if (ind === 0) {
            ellipse.classList.add('tasks__left_show', 'showed')
            content[ind].classList.add('tasks__tasks_show')
          }
          if (ind === 1) {
            ellipse.classList.add('tasks__right_show', 'showed')
            content[ind].classList.add('tasks__TA_show')
          }

          //decision
          if (ind == 2) {
            ellipse.classList.add('decision__ellipse_show', 'showed')
            content[ind].classList.add('decision__content_show')
            document.querySelector('.decision .decision__rabbit').classList.add('decision__rabbit_show')
          }

          //why
          if (ind == 3) {
            ellipse.classList.add('why__ellipse_show', 'showed')
            content[ind].classList.add('why__content_show')
          }

          //results
          if (ind === 4) {
            ellipse.classList.add('results__left_show', 'showed')
            content[ind].classList.add('results__result_show')

            if (window.innerWidth <= 768)
              document.querySelector('.results .results__nest').classList.add('results__nest_show')
          }
          if (ind === 5) {
            ellipse.classList.add('results__right_show', 'showed')
            content[ind].classList.add('results__comments_show')
          }

          //team
          if (ind == 6) {
            ellipse.classList.add('team__ellipse_show', 'showed')
            document.querySelector('.team .team__content').classList.add('team__content_show')
            content[ind].forEach(member => member.classList.add('member_show'))
            document.querySelector('.team .team__nest').classList.add('team__nest_show')
          }
        }
      }
      // if (window.pageYOffset >= ((line.getBoundingClientRect().y + window.pageYOffset) - window.innerHeight / 100 * 0.1) || line.getBoundingClientRect().y + window.pageYOffset > window.pageYOffset + window.innerHeight) {
      //   if (line.classList.contains('titleLine_show'))
      //     line.classList.remove('titleLine_show')
      // }
    })

    // document.querySelector('.tasks .tasks__left').classList.add('tasks__left_show')
  }

  window.addEventListener('scroll', () => {
    showTasksEllipses()
  })

  showHeaderEllipse()
  showTasksEllipses()
})