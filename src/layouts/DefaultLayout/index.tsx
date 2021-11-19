import { AppTheme } from '../../types/utils/colors';

import { LayoutContainer } from './styles';

interface DefaultLayoutProps {
  appTheme: AppTheme;
  toggleAppTheme: () => void;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  appTheme,
  toggleAppTheme,
}) => (
  <LayoutContainer>
    {children}
    <button onClick={toggleAppTheme}>
      {appTheme === 'light' ? 'dark' : 'light'}
    </button>
  </LayoutContainer>
);
