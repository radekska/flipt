import { NavLink } from 'react-router-dom';
import { classNames } from '~/utils/helpers';

export interface Tab {
  name: string;
  to: string;
}

type TabBarProps = {
  tabs: Tab[];
};

export default function TabBar(props: TabBarProps) {
  const { tabs } = props;

  return (
    <div className="mt-3 flex flex-row sm:mt-5">
      <div className="border-gray-200 border-b-2">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <NavLink
              end
              key={tab.name}
              to={tab.to}
              className={({ isActive }) =>
                classNames(
                  isActive
                    ? 'text-violet-600 border-violet-500'
                    : 'text-gray-600 border-transparent hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap border-b-2 px-1 py-2 text-sm font-medium'
                )
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
