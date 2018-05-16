import PropTypes from 'prop-types'

/* eslint-disable-next-line import/prefer-default-export */
export const articleListItemProps = {
  title: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  onHandlePress: PropTypes.func.isRequired
}

// these should be of the type 'const huu = PropTypes.shape({ property: hii })',
// but that doesn't work for some reason (likely bad syntax), so I opted for regular objects instead
export const articleListProps = {

  articles: PropTypes.arrayOf(PropTypes.shape({})),
  handleNavigation: PropTypes.func.isRequired,
  refreshing: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired
}
