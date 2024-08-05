import { createBoard } from '@wixc3/react-board';
import { SubdetailBar } from '../../../components/subdetail-bar/subdetail-bar';

export default createBoard({
    name: 'SubdetailBar',
    Board: () => <SubdetailBar windSpeed={2} windSpeedType={"mi/h"} humidity={93} pollution={16} />,
    isSnippet: true,
});
