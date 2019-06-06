<?php

/**
 * @file
 * Provides an additional config form for theme settings.
 */

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Drupal\Core\Link;
use Drupal\Core\Render\Markup;


// Set theme name to use in the key values.
$theme_name = \Drupal::theme()->getActiveTheme()->getName();

/**
 * Implements hook_form_system_theme_settings_alter().
 *
 * Form override for theme settings.
 */
function stanford_basic_form_system_theme_settings_alter(array &$form, FormStateInterface $form_state) {
  $form['options_settings'] = [
    '#type' => 'fieldset',
    '#title' => t('Theme Specific Settings'),
  ];

  $img = '<img src="' . base_path() . drupal_get_path('theme', 'stanford_basic') . '/dist/assets/img/lockup-example.png" />';
  $rendered_image = render($img);
  $image_markup = Markup::create($rendered_image);
  $decanter = Link::fromTextAndUrl('Decanter Lockup Component', Url::fromUri('http://decanter.stanford.edu/section-components.html#kssref-components-lockup'))->toString();

  $form['options_settings']['stanford_basic_lockup'] = [
    '#type' => 'fieldset',
    '#title' => t('Lockup Settings'),
    '#field_prefix' => "<p>$image_markup</p><p>More examples can be found at: $decanter</p>"
  ];

  $form['options_settings']['stanford_basic_lockup']['lockup']['#tree'] = TRUE;

  $form['options_settings']['stanford_basic_lockup']['lockup']['option'] = [
    '#type' => 'select',
    '#title' => t('Lockup Options'),
    '#options' => [
      'a' => t('Option A'),
      'b' => t('Option B'),
      'c' => t('Option C'),
      'd' => t('Option D'),
      'e' => t('Option E'),
      'f' => t('Option F'),
      'g' => t('Option G'),
      'h' => t('Option H'),
      'i' => t('Option I'),
      'j' => t('Option J'),
      'k' => t('Option K'),
      'l' => t('Option L'),
      'm' => t('Option M'),
      'n' => t('Option N'),
      'o' => t('Option O'),
      'p' => t('Option P'),
      'q' => t('Option Q'),
      'r' => t('Option R'),
      's' => t('Option S'),
      't' => t('Option T'),
    ],
    '#default_value' => theme_get_setting('lockup.option'),
    '#description' => t("Layout options."),
  ];

  $form['options_settings']['stanford_basic_lockup']['lockup']['line1'] = [
    '#type' => 'textfield',
    '#title' => t('Line 1'),
    '#default_value' => theme_get_setting('lockup.line1'),
    '#description' => t("Site title line."),
  ];

  $form['options_settings']['stanford_basic_lockup']['lockup']['line2'] = [
    '#type' => 'textfield',
    '#title' => t('Line 2'),
    '#default_value' => theme_get_setting('lockup.line2'),
    '#description' => t("Secondary title line."),
  ];

  $form['options_settings']['stanford_basic_lockup']['lockup']['line3'] = [
    '#type' => 'textfield',
    '#title' => t('Line 3'),
    '#default_value' => theme_get_setting('lockup.line3'),
    '#description' => t("Tertiary title line."),
  ];

  $form['options_settings']['stanford_basic_lockup']['lockup']['line4'] = [
    '#type' => 'textfield',
    '#title' => t('Line 4'),
    '#default_value' => theme_get_setting('lockup.line4'),
    '#description' => t("Organization name."),
  ];

  $form['options_settings']['stanford_basic_lockup']['lockup']['line5'] = [
    '#type' => 'textfield',
    '#title' => t('Line 5'),
    '#default_value' => theme_get_setting('lockup.line5'),
    '#description' => t("Last line full width option."),
  ];

  // BrowserSync support.
  $form['options_settings']['stanford_basic_browser_sync'] = [
    '#type' => 'fieldset',
    '#title' => t('BrowserSync Settings'),
  ];
  $form['options_settings']['stanford_basic_browser_sync']['browser_sync']['#tree'] = TRUE;
  $form['options_settings']['stanford_basic_browser_sync']['browser_sync']['enabled'] = [
    '#type' => 'checkbox',
    '#title' => t('Enable BrowserSync support for theme'),
    '#default_value' => theme_get_setting('browser_sync.enabled'),
    '#description' => t("Checking this box will automatically add the BrowserSync JS to your theme for development."),
  ];

  $form['options_settings']['stanford_basic_browser_sync']['browser_sync']['host'] = [
    '#type' => 'textfield',
    '#title' => t('BrowserSync host'),
    '#default_value' => theme_get_setting('browser_sync.host'),
    '#description' => t("Default: localhost. Enter 'HOST' which will be replaced by your site's hostname."),
    '#states' => [
      'visible' => [':input[name="browser_sync[enabled]"]' => ['checked' => TRUE]],
    ],
  ];

  $form['options_settings']['stanford_basic_browser_sync']['browser_sync']['port'] = [
    '#type' => 'number',
    '#title' => t('Enable BrowserSync support for theme'),
    '#default_value' => theme_get_setting('browser_sync.port'),
    '#description' => t("Default: '3000'."),
    '#states' => [
      'visible' => [':input[name="browser_sync[enabled]"]' => ['checked' => TRUE]],
    ],
  ];

}
