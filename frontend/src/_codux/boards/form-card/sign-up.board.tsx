import { createBoard } from '@wixc3/react-board';
import { FormCard } from '../../../components/form-card/form-card';

export default createBoard({
    name: 'Sign-Up Form',
    Board: () => <FormCard formType="signup" />,
    environmentProps: {
        windowHeight: 600,
        windowWidth: 800,
    },
    isSnippet: true,
});
