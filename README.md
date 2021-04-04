# this-pokemon-does-not-exist

## Important links
Generated images are under [images][1].  
Generated names are under [names][2].

[1]: https://github.com/karynaur/this-pokemon-does-not-exist/tree/main/results/run2-generated-25
[2]: https://github.com/karynaur/this-pokemon-does-not-exist/tree/main/results/namelist

The models can be found [here](https://github.com/karynaur/this-pokemon-does-not-exist/tree/main/models)<br>
The code to make the template can be found [here](https://github.com/karynaur/this-pokemon-does-not-exist/blob/main/Template.ipynb)<br>
All the preprocessed images can be found [here](https://github.com/karynaur/this-pokemon-does-not-exist/tree/main/Card)<br>


## What it does
It produces images which look exactly like how a Pokémon would look, but the Pokémon's do not actually exist. The [model](https://github.com/lucidrains/lightweight-gan) has successfully learn a latent space of different Pokémon like species by training on a corpus of "real" Pokémon images. We then combine these processed images into the card layout to make a new card based on the Pokémon. We also trained a minGPT on existing Pokémon names and asked it to generate new names! Magale, Pimate, Garenige and Popet are some of the Pokémon names that don't exist.

## How we built it
We built it with the help of variation of StyleGAN model which we fine-tuned to generate images. We trained a [minGPT](https://github.com/karpathy/minGPT) model(a minimal implemetation of GPT by Karpathy). We then manually prepared the cards(of course we used python, duh) and put them on a website. 

