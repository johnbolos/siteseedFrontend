
/*

          {
            formFields && formFields.map(field => {
              if (field.containerClass) {
                return (
                  <div className={field.containerClass}>
                    <li className="center">
                      <Field
                        label={field.label}
                        labelClasses={field.labelClasses}
                        id={field.id}
                        type={field.type}
                        inputClasses={field.inputClasses}
                        placeholder={field.placeholder}
                        required
                        autoComplete={field.name}
                        value={billingDetails.name}
                        onChange={(e) => {
                          setBillingDetails({ ...billingDetails, name: e.target.value });
                        }}
                      />
                    </li>
                  </div>
                )
              }
              return (
                <li className={liClasses}>
                  <Field
                    label={field.label}
                    labelClasses={field.labelClasses}
                    id={field.id}
                    type={field.type}
                    inputClasses={field.inputClasses}
                    placeholder={field.placeholder}
                    required
                    autoComplete={field.name}
                    value={billingDetails.name}
                    onChange={(e) => {
                      setBillingDetails({ ...billingDetails, name: e.target.value });
                    }}
                  />
                </li>
              )
            }
            )
          }
*/


/*

const Field = ({
  label,
  labelClasses,
  id,
  type,
  inputClasses,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
  <div className="FormRow">
  <label htmlFor={id} className={"FormRowLabel" + labelClasses}>
  {label}
</label>
<input
  className={"FormRowInput" + inputClasses}
  id={id}
  type={type}
  placeholder={placeholder}
  required={required}
  autoComplete={autoComplete}
  value={value}
  onChange={onChange}
/>
</div>
);

*/


