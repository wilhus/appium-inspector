import {BulbOutlined} from '@ant-design/icons';
import {Button, Tooltip} from 'antd';
import {useDispatch} from 'react-redux';

import {toggleTheme} from '../../actions/Theme';

const ToggleTheme = ({t}) => {
  const dispatch = useDispatch();

  return (
    <Tooltip title={t('Toggle Dark Mode')}>
      <Button id="btnToggleTheme" icon={<BulbOutlined />} onClick={() => dispatch(toggleTheme())} />
    </Tooltip>
  );
};

export default ToggleTheme;
