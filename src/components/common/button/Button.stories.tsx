import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
    title: 'Common/Button',
    component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    primary: true,
    label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
    size: 'large',
    label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
    size: 'small',
    label: 'Button',
}