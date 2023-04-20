import * as RadixSwitch from '@radix-ui/react-switch'

type Props = RadixSwitch.SwitchProps

export const Switch = (props: Props) => (
  <RadixSwitch.Root
    className="w-[42px] h-[25px] bg-neutral-400 rounded-full relative shadow-[0_2px_10px] shadow-blackA7 data-[state=checked]:bg-white outline-none cursor-default"
    style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' } as any}
    {...props}
  >
    <RadixSwitch.Thumb className="block w-[21px] h-[21px] bg-emerald-500 rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-150 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
  </RadixSwitch.Root>
)
