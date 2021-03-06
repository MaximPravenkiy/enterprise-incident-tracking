import React, { FC, memo, useMemo } from 'react';
import { WarningOutlined } from '@ant-design/icons/lib';
import { PriorityLabelProps } from './priority-label.interfaces';
import { Label } from './priority-label.styles';

const PriorityLabel: FC<PriorityLabelProps> = memo(({ color, text }) => {
    const styles = useMemo(
        () => ({ color, marginRight: '5px', fontSize: '20px' }),
        [color]
    );
    return (
        <Label>
            <WarningOutlined style={styles} />
            <div>{text}</div>
        </Label>
    );
});

export default PriorityLabel;
