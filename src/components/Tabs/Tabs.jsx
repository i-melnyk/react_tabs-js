export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // console.log(onTabSelected);
  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {tabs.find(tab => activeTabId === tab.id).title}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  key={tab.id}
                  className={tab.id === activeTabId ? 'is-active' : ''}
                  data-cy="Tab"
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => {
                      if (tab.id !== activeTabId) {
                        onTabSelected(tab.id);
                      }
                    }}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabs.find(tab => activeTabId === tab.id).content}
        </div>
      </div>
    </div>
  );
};
