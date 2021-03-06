import PropTypes from 'prop-types';
import React from 'react';
import AggSelect from './agg_select';
import AggRow from './agg_row';
import createChangeHandler from '../lib/create_change_handler';
import createSelectHandler from '../lib/create_select_handler';
import createTextHandler from '../lib/create_text_handler';

export const Static = props => {
  const handleChange = createChangeHandler(props.onChange, props.model);
  const handleSelectChange = createSelectHandler(handleChange);
  const handleTextChange = createTextHandler(handleChange);

  const defaults = {
    numerator: '*',
    denominator: '*',
    metric_agg: 'count'
  };

  const model = { ...defaults, ...props.model };

  return (
    <AggRow
      disableDelete={props.disableDelete}
      model={props.model}
      onAdd={props.onAdd}
      onDelete={props.onDelete}
      siblings={props.siblings}
    >
      <div style={{ flex: '1 0 auto' }}>
        <div style={{ flex: '1 0 auto', display: 'flex' }}>
          <div className="vis_editor__row_item">
            <div className="vis_editor__label">Aggregation</div>
            <AggSelect
              siblings={props.siblings}
              value={model.type}
              onChange={handleSelectChange('type')}
            />
          </div>
          <div className="vis_editor__row_item">
            <div className="vis_editor__label">Static Value</div>
            <input
              className="vis_editor__input-grows-100"
              onChange={handleTextChange('value')}
              value={model.value}
              steps="0.1"
              type="number"
            />
          </div>
        </div>
      </div>
    </AggRow>
  );
};

Static.propTypes = {
  disableDelete: PropTypes.bool,
  fields: PropTypes.object,
  model: PropTypes.object,
  onAdd: PropTypes.func,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  panel: PropTypes.object,
  series: PropTypes.object,
  siblings: PropTypes.array,
};
