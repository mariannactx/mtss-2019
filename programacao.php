<h3 class="content-titulo">
    <span>Programação</span>
</h3>
<div class="content-texto">
<div id="timeline">
    <?php foreach($programacao as $atividade): ?>
        <div class="timeline__block">
            <div class="timeline__img">
            <?php if(!empty($atividade['foto'])): ?>
                <img src="img/<?=$atividade['foto']?>" alt="Picture">
            <?php else: ?>
                <i class="fas <?=$atividade['icone']?>"></i>
            <?php endif ?>
            </div>
            <div class="timeline__content">
                <h2 class="no-indent"><?=$atividade['titulo']?></h2>
                <?php if(!empty($atividade['palestrante'])): ?>
                    <?php
                        $contato  = $atividade['contato'];
                        $twitter  = $contato['twitter'];
                        $github   = $contato['github'];
                        $linkedin = $contato['linkedin'];
                        
                    ?>
                    <h3 class="no-indent">
                        <?=$atividade['palestrante']?>
                        <?php if($twitter) : ?>
                            <a href="http://www.twitter.com/<?=$twitter?>"<i class="fab fa-twitter"></i></a>
                        <?php endif ?>
                        <?php if($github) : ?>
                            <a href="http://www.github.com/<?=$github?>"<i class="fab fa-github"></i></a>
                        <?php endif ?>
                        <?php if($linkedin) : ?>
                            <a href="http://www.linkedin.com/in/<?=$linkedin?>"<i class="fab fa-linkedin"></i></a>
                        <?php endif ?>
                    </h3>
                <?php endif;?>
                <span class="timeline__date no-indent"><?=$atividade['hora']?></span>
                <?php if(!empty($atividade['descricao'])): ?>
                <p class="no-indent"><?=$atividade['descricao']?></p>
                <i class="timeline__toggle fas fa-arrow-down"></i>
                <?php endif; ?>
            </div>
        </div>
    <?php endforeach; ?>
</div>
</div>