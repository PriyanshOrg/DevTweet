import type { ReactElement, ReactNode } from 'react';
import {
  LightBulbIcon,
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';

const THEMES = {
  info: {
    classes:
      'bg-blue-100 text-blue-800 dark:(text-blue-300 bg-blue-200 bg-opacity-10)',
    icon: <InformationCircleIcon className="w-5 h-5 mt-1" />,
  },
  idea: {
    classes:
      'bg-gray-100 text-gray-800 dark:(text-gray-300 bg-gray-200 bg-opacity-10)',
    icon: <LightBulbIcon className="w-5 h-5 mt-1" />,
  },
  error: {
    classes:
      'bg-red-200 text-red-900 dark:(text-red-200 bg-red-600 bg-opacity-30)',
    icon: <ExclamationCircleIcon className="w-5 h-5 mt-1" />,
  },
  default: {
    classes:
      'bg-orange-100 text-orange-800 dark:(text-orange-300 bg-orange-200 bg-opacity-10)',
    icon: <ExclamationTriangleIcon className="w-5 h-5 mt-1" />,
  },
};

export default function Callout({
  children,
  type = 'default',
}: {
  children: ReactNode;
  type?: keyof typeof THEMES;
}) {
  return (
    <div className={`${THEMES[type].classes} flex rounded-lg callout mt-6`}>
      <div className="py-2 pl-3 pr-2 text-xl select-none">
        {THEMES[type].icon}
      </div>
      <div className="py-2 pr-4 overflow-auto">{children}</div>
    </div>
  );
}
