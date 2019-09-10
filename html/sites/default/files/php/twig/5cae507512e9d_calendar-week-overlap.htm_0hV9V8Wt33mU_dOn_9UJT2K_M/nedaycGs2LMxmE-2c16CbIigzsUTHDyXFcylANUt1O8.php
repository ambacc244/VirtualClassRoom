<?php

/* modules/calendar/templates/calendar-week-overlap.html.twig */
class __TwigTemplate_09868acb8a7a3abeeef231e47a57cc67726533f04fa0332638ce1be61c85dd24 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("for" => 34, "if" => 133, "set" => 143);
        $filters = array("length" => 144);
        $functions = array("range" => 132);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('for', 'if', 'set'),
                array('length'),
                array('range')
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 1
        echo "<?php
/**
 * @file
 * Template to display a view as a calendar week with overlapping items
 * 
 * @see template_preprocess_calendar_week.
 *
 * \$day_names: An array of the day of week names for the table header.
 * \$rows: The rendered data for this week.
 * 
 * For each day of the week, you have:
 * \$rows['date'] - the date for this day, formatted as YYYY-MM-DD.
 * \$rows['datebox'] - the formatted datebox for this day.
 * \$rows['empty'] - empty text for this day, if no items were found.
 * \$rows['all_day'] - an array of formatted all day items.
 * \$rows['items'] - an array of timed items for the day.
 * \$rows['items'][\$time_period]['hour'] - the formatted hour for a time period.
 * \$rows['items'][\$time_period]['ampm'] - the formatted ampm value, if any for a time period.
 * \$rows['items'][\$time_period]['values'] - An array of formatted items for a time period.
 * 
 * \$view: The view.
 * \$min_date_formatted: The minimum date for this calendar in the format YYYY-MM-DD HH:MM:SS.
 * \$max_date_formatted: The maximum date for this calendar in the format YYYY-MM-DD HH:MM:SS.
 * 
 */
?>
<div class=\"calendar-calendar\"><div class=\"week-view\">
  <div id=\"header-container\">
  <table class=\"full\">
  <tbody>
    <tr class=\"holder\"><td class=\"calendar-time-holder\"></td><td class=\"calendar-day-holder\"></td><td class=\"calendar-day-holder\"></td><td class=\"calendar-day-holder\"></td><td class=\"calendar-day-holder\"></td><td class=\"calendar-day-holder\"></td><td class=\"calendar-day-holder\"></td><td class=\"calendar-day-holder\"></td><td class=\"calendar-day-holder margin-right\"></td></tr>
    <tr>
      <th class=\"calendar-agenda-hour\">&nbsp;</th>
      ";
        // line 34
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["day_names"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["cell"]) {
            // line 35
            echo "        <th class=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["cell"], "class", array()), "html", null, true));
            echo "\" id=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["cell"], "header_id", array()), "html", null, true));
            echo "\">
          ";
            // line 36
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["cell"], "data", array()), "html", null, true));
            echo "
        </th>
      ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['cell'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 39
        echo "      <th class=\"calendar-day-holder margin-right\"></th>
    </tr>
  </tbody>
  </table>
  </div>
    ";
        // line 127
        echo "  <div id=\"single-day-container\">
    <table class=\"full\">
      <tbody>
        <tr class=\"holder\"><td class=\"calendar-time-holder\"></td><td class=\"calendar-day-holder\"></td><td class=\"calendar-day-holder\"></td><td class=\"calendar-day-holder\"></td><td class=\"calendar-day-holder\"></td><td class=\"calendar-day-holder\"></td><td class=\"calendar-day-holder\"></td><td class=\"calendar-day-holder\"></td></tr>
        <tr>
          ";
        // line 132
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(range(0, 7));
        $context['loop'] = array(
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        );
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["i"]) {
            // line 133
            echo "            ";
            if ($this->getAttribute($context["loop"], "first", array())) {
                // line 134
                echo "              <td class=\"first\">
            ";
            } elseif (($this->getAttribute(            // line 135
$context["loop"], "index0", array()) == 7)) {
                // line 136
                echo "              <td class=\"last\" headers=\"";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["header_ids"] ?? null), ($this->getAttribute($context["loop"], "index0", array()) - 1), array(), "array"), "html", null, true));
                echo "\">
            ";
            } else {
                // line 138
                echo "              <td headers=\"";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["header_ids"] ?? null), ($this->getAttribute($context["loop"], "index0", array()) - 1), array(), "array"), "html", null, true));
                echo "\">
            ";
            }
            // line 140
            echo "
            ";
            // line 141
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["start_times"] ?? null));
            $context['loop'] = array(
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            );
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["time_cnt"] => $context["start_time"]) {
                // line 142
                echo "              ";
                if (($context["time_cnt"] == 0)) {
                    // line 143
                    echo "                ";
                    $context["class"] = "first";
                    // line 144
                    echo "              ";
                } elseif (($context["time_cnt"] == (twig_length_filter($this->env, ($context["start_times"] ?? null)) - 1))) {
                    // line 145
                    echo "                ";
                    $context["class"] = "last";
                    // line 146
                    echo "              ";
                } else {
                    // line 147
                    echo "                ";
                    $context["class"] = "";
                    // line 148
                    echo "              ";
                }
                // line 149
                echo "
              ";
                // line 150
                if ($this->getAttribute($this->getAttribute($this->getAttribute($context["loop"], "parent", array()), "loop", array()), "first", array())) {
                    // line 151
                    echo "                ";
                    $context["time"] = $this->getAttribute(($context["items"] ?? null), $context["start_time"], array(), "array");
                    // line 152
                    echo "                <div class=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["class"] ?? null), "html", null, true));
                    echo " calendar-agenda-hour\">
                  <span class=\"calendar-hour\">";
                    // line 153
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["time"] ?? null), "hour", array()), "html", null, true));
                    echo "</span><span class=\"calendar-ampm\">";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["time"] ?? null), "ampm", array()), "html", null, true));
                    echo "</span>
                </div>
              ";
                } else {
                    // line 156
                    echo "                <div class=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["class"] ?? null), "html", null, true));
                    echo " calendar-agenda-items single-day\">
                <div class=\"half-hour\">&nbsp;</div>
                  <div class=\"calendar item-wrapper\">
                    <div class=\"inner\">
                      ";
                    // line 161
                    echo "                      ";
                    if ($this->getAttribute($this->getAttribute($this->getAttribute(($context["items"] ?? null), $context["start_time"], array(), "array"), "values", array(), "array"), ($this->getAttribute($this->getAttribute($this->getAttribute($context["loop"], "parent", array()), "loop", array()), "index0", array()) - 1), array(), "array")) {
                        // line 162
                        echo "                        ";
                        $context['_parent'] = $context;
                        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute($this->getAttribute(($context["items"] ?? null), $context["start_time"], array(), "array"), "values", array(), "array"), ($this->getAttribute($this->getAttribute($this->getAttribute($context["loop"], "parent", array()), "loop", array()), "index0", array()) - 1), array(), "array"));
                        $context['loop'] = array(
                          'parent' => $context['_parent'],
                          'index0' => 0,
                          'index'  => 1,
                          'first'  => true,
                        );
                        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
                            $length = count($context['_seq']);
                            $context['loop']['revindex0'] = $length - 1;
                            $context['loop']['revindex'] = $length;
                            $context['loop']['length'] = $length;
                            $context['loop']['last'] = 1 === $length;
                        }
                        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                            // line 163
                            echo "                          ";
                            if ($this->getAttribute($context["item"], "is_first", array(), "array")) {
                                // line 164
                                echo "                            <div class=\"item ";
                                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "class", array()), "html", null, true));
                                echo " first_item\">
                          ";
                            } else {
                                // line 166
                                echo "                            <div class=\"item ";
                                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "class", array()), "html", null, true));
                                echo "\">
                          ";
                            }
                            // line 168
                            echo "                              ";
                            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "entry", array()), "html", null, true));
                            echo "
                            </div>
                        ";
                            ++$context['loop']['index0'];
                            ++$context['loop']['index'];
                            $context['loop']['first'] = false;
                            if (isset($context['loop']['length'])) {
                                --$context['loop']['revindex0'];
                                --$context['loop']['revindex'];
                                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                            }
                        }
                        $_parent = $context['_parent'];
                        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                        $context = array_intersect_key($context, $_parent) + $_parent;
                        // line 171
                        echo "                      ";
                    }
                    // line 172
                    echo "                    </div>
                  </div>
                </div>
                ";
                }
                // line 176
                echo "              ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['time_cnt'], $context['start_time'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 177
            echo "            </td>
          ";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['i'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 179
        echo "        </tr>
      </tbody>
    </table>
  </div>
  <div class=\"single-day-footer\">&nbsp;</div>
</div></div>
";
    }

    public function getTemplateName()
    {
        return "modules/calendar/templates/calendar-week-overlap.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  311 => 179,  296 => 177,  282 => 176,  276 => 172,  273 => 171,  255 => 168,  249 => 166,  243 => 164,  240 => 163,  222 => 162,  219 => 161,  211 => 156,  203 => 153,  198 => 152,  195 => 151,  193 => 150,  190 => 149,  187 => 148,  184 => 147,  181 => 146,  178 => 145,  175 => 144,  172 => 143,  169 => 142,  152 => 141,  149 => 140,  143 => 138,  137 => 136,  135 => 135,  132 => 134,  129 => 133,  112 => 132,  105 => 127,  98 => 39,  89 => 36,  82 => 35,  78 => 34,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "modules/calendar/templates/calendar-week-overlap.html.twig", "/var/www/html/boxsand/public_html/modules/calendar/templates/calendar-week-overlap.html.twig");
    }
}
