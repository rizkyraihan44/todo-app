/* eslint-disable react/prop-types */
export default function Tabs({ todos, selectedTab, setSelectedTab }) {
  const tabs = ['All', 'Open', 'Completed']
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        let numOfTask = 0;
        if (tab === 'All') {
          numOfTask = todos.length
        } else if (tab === 'Open') {
          numOfTask = todos.filter(todo => !todo.complete).length
        } else if (tab === 'Completed') {
          numOfTask = todos.filter(todo => todo.complete).length
        }
        return (
          <button key={tabIndex}
            className={`tab-button ${tab === selectedTab ? 'tab-selected' : ''}`}
            onClick={() => setSelectedTab(tab)}>
            <h4>{tab}
              {" "}<span>({numOfTask})</span>
            </h4>
          </button>
        )
      })}
      <hr />
    </nav>
  )
}
