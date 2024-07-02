import { createBoard } from '@wixc3/react-board';
import { FormCard } from '../../../components/form-card/form-card';

export default createBoard({
    name: 'Contact-Us Form',
    Board: () => <FormCard formType="contact" />,
    environmentProps: {
        windowHeight: 600,
        windowWidth: 800,
    },
    isSnippet: true,
});
