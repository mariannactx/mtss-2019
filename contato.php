<?php 
    $contato  = $atividade['contato'];
    $twitter  = $contato['twitter'];
    $github   = $contato['github'];
    $linkedin = $contato['linkedin'];
?>
<h3 class="no-indent">
    <?=$atividade['palestrante']?>
    <?php if($twitter): ?>
        <a target="_blank" href="http://www.twitter.com/<?=$twitter?>" <i class="fab fa-twitter">
            </i>
        </a>
    <?php endif ?>
    <?php if($github): ?>
        <a target="_blank" href="http://www.github.com/<?=$github?>" <i class="fab fa-github">
            </i>
        </a>
    <?php endif ?>
    <?php if($linkedin): ?>
        <a target="_blank" href="http://www.linkedin.com/in/<?=$linkedin?>" <i class="fab fa-linkedin">
            </i>
        </a>
    <?php endif ?>
</h3>