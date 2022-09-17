import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { GameController, Check } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import { CreateAdBanner } from "./CreateAdBanner";
import { Input } from "./Form/Input";
import { GameProps } from "../App";

export function CreateAdModal({}) {
  const [games, setGames] = useState<GameProps[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  function handleCreateAd(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.name) {
      return;
    }

    try {
      axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel,
      });
    } catch (err) {}
  }

  useEffect(() => {
    axios.get("http://localhost:3333/games").then(({ data }) => setGames(data));
  }, []);

  return (
    <Dialog.Root>
      <CreateAdBanner />
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed bg-[#2A2634] rounded-lg py-8 px-10 font-semibold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px]">
          <Dialog.Title className="text-3xl text-white font-black">
            Publique um anúncio
          </Dialog.Title>

          <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold text-white">
                Qual o game?
              </label>
              <select
                className="bg-zinc-900 py-3 px-4 rounded text-sm  appearance-none"
                id="game"
                name="game"
                defaultValue=""
              >
                <option disabled value="">
                  Selecione o game que deseja jogar
                </option>
                {games.map(({ id, title }) => (
                  <option key={id} value={id}>
                    {title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold text-white">
                Seu nome (ou nickname)
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Como te chamam dentro do game?"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="yearsPlaying">Joa há quantos anos?</label>
                <Input
                  type="number"
                  id="yearsPlaying"
                  name="yearsPlaying"
                  placeholder="Tudo bem ser ZERO"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="discord">Qual seu discord?</label>
                <Input
                  type="text"
                  id="discord"
                  name="discord"
                  placeholder="Usuario#0000"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="weekDays">Quando costuma jogar?</label>
                <ToggleGroup.Root
                  type="multiple"
                  asChild
                  value={weekDays}
                  onValueChange={setWeekDays}
                >
                  <div className="grid grid-cols-4 gap-2">
                    <ToggleGroup.Item
                      className={`w-8 h-8 rounded  ${
                        weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-900"
                      }  text-white`}
                      value="0"
                      title="Domingo"
                      type="button"
                    >
                      D
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      className={`w-8 h-8 rounded  ${
                        weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-900"
                      }  text-white`}
                      title="Segunda"
                      type="button"
                      value="1"
                    >
                      S
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      className={`w-8 h-8 rounded  ${
                        weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-900"
                      }  text-white`}
                      title="Terça"
                      type="button"
                      value="2"
                    >
                      T
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      className={`w-8 h-8 rounded  ${
                        weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-900"
                      }  text-white`}
                      title="Quarta"
                      type="button"
                      value="3"
                    >
                      Q
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      className={`w-8 h-8 rounded  ${
                        weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-900"
                      }  text-white`}
                      title="Quinta"
                      type="button"
                      value="4"
                    >
                      Q
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      className={`w-8 h-8 rounded  ${
                        weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-900"
                      }  text-white`}
                      title="Sexta"
                      type="button"
                      value="5"
                    >
                      S
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      className={`w-8 h-8 rounded  ${
                        weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-900"
                      }  text-white`}
                      title="Sábado"
                      type="button"
                      value="6"
                    >
                      S
                    </ToggleGroup.Item>
                  </div>
                </ToggleGroup.Root>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label htmlFor="hourStart">Qual horário do dia?</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    type="time"
                    id="hourStart"
                    name="hourStart"
                    placeholder="De"
                  />
                  <Input
                    type="time"
                    id="hourEnd"
                    name="hourEnd"
                    placeholder="Até"
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 flex gap-2 text-sm items-center">
              <Checkbox.Root
                className="w-6 h-6 p-1 rounded bg-zinc-900"
                checked={useVoiceChannel}
                onCheckedChange={(checked) => {
                  setUseVoiceChannel(!!checked);
                }}
              >
                <Checkbox.Indicator>
                  <Check className="w-4 h-4 text-emerald-400" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              Costumo me conectar ao chat de voz
            </div>

            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close>
                <button
                  type="button"
                  className="bg-zinc-500 px-5 h-12 rounded-md font-semibold text-white flex items-center gap-3 hover:bg-zinc-600"
                >
                  Cancelar
                </button>
              </Dialog.Close>
              <button
                type="submit"
                className="bg-violet-500 px-5 h-12 rounded-md font-semibold text-white flex items-center gap-3 hover:bg-violet-600"
              >
                <GameController size={24} />
                Encontrar duo
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
